//
//  EnvironmentView.swift
//  App
//
//  Created by SImon Nozaki on 2023-03-11.
//

import SwiftUI
import Foundation

/*
 * 環境情報を入力するView、ウェブビューのエントリポイントも兼ねる
 */
struct EnvironmentView: View {
    @State
    private var envString = ""
    @State
    private var isDestinationNotFound = false
    @EnvironmentObject var appRuntimeState: AppRuntimeState
    
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                Text("Welcome to capacidor!")
                    .bold()
                    .font(.title)
                    .foregroundColor(Color(0x0D8D88))
                Text("Capacidorを起動します。\nホストURLをポート付きで入力してください。")
                TextField("http://<your ip>:<port>", text: $envString)
                    .textFieldStyle(.roundedBorder)
                Button(
                    action: {
                        // 必要ならここでURL文字列の検証を入れてもいい
                        guard let url = URL(string: self.envString) else {
                            isDestinationNotFound = false
                            return
                        }
                        print("Not guarded!")
                        // 必要ならここでURL文字列の検証を入れてもいい
                        URLSession.shared.dataTask(with: url) { (data, response, error) in
                            if let _ = error {
                                isDestinationNotFound = true
                                return
                            }
                            guard let response = response as? HTTPURLResponse else {
                                isDestinationNotFound = true
                                return
                            }
                            if response.statusCode != 200 {
                                isDestinationNotFound = true
                                return
                            }
                            guard let _ = data, let _ = response.url else {
                                isDestinationNotFound = true
                                return
                            }
                            self.appRuntimeState.isEnvironmentValid = true
                        }.resume()
                    },
                    label: {
                        Text("GO")
                            .fontWeight(.semibold)
                            .frame(minWidth: 160)
                            .padding(8)
                            .background(Color(0xD8D88))
                            .foregroundColor(Color.white)
                            .cornerRadius(4)
                    }
                ).alert("宛先のウェブページがありません", isPresented: $isDestinationNotFound) {
                    Button("OK") {}
                } message: {
                    Text("指定のURLは存在しないようです")
                }
                NavigationLink(
                    destination: MainView(hostUrl: self.$envString.wrappedValue).navigationBarBackButtonHidden(),
                    isActive: $appRuntimeState.isEnvironmentValid) {
                    EmptyView()
                }
            }.padding(20)
        }
    }
}

struct EnvironmentView_Previews: PreviewProvider {
    static var previews: some View {
        // stateのインスタンスを決め打ちでDIしないとクラッシュする
        EnvironmentView().environmentObject(AppRuntimeState())
    }
}
