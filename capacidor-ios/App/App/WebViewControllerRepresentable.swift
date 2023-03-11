//
//  WebViewControllerRepresentable.swift
//  App
//
//  Created by SImon Nozaki on 2023-03-11.
//
// 参考: UIKitで作成したViewControllerをSwiftUIから使う: https://tech.nri-net.com/entry/display_uiview_created_with_uikit_on_swiftui

import Foundation
import SwiftUI

/*
 * UIKitのViewControllerおよびサブクラスをSwiftUIのViewに読み替える構造体
 */
struct WebViewControllerRepresentable : UIViewControllerRepresentable {
    // swift 5.1からプロパティを使ったイニシャライザが自動で生成される
    var hostUrl: String = ""
    
    func makeUIViewController(context: Context) -> some UIViewController {
        let viewController = CDBridgeViewController()
        viewController.hostUrl = self.hostUrl
        
        return viewController
    }
    
    // 不必要だが必ずoverrideが必要（実装は不要）
    func updateUIViewController(_ uiViewController: UIViewControllerType, context: Context) {
    }
}
