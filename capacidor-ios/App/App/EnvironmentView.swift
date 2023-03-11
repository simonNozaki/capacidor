//
//  EnvironmentView.swift
//  App
//
//  Created by SImon Nozaki on 2023-03-11.
//

import SwiftUI

/*
 * 環境情報を入力するView、ウェブビューのエントリポイントも兼ねる
 */
struct EnvironmentView: View {
    @State
    private var envString: String = ""
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
                        self.appRuntimeState.isEnvironmentValid = true
                        // 必要ならここでURL文字列の検証を入れてもいい
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
                )
                NavigationLink(
                    destination: MainView(hostUrl: self.$envString.wrappedValue),
                    isActive: $appRuntimeState.isEnvironmentValid) {
                    EmptyView()
                }
            }.padding(20)
        }.navigationBarBackButtonHidden(true)
    }
}

struct EnvironmentView_Previews: PreviewProvider {
    static var previews: some View {
        // stateのインスタンスを決め打ちでDIしないとクラッシュする
        EnvironmentView().environmentObject(AppRuntimeState())
    }
}
