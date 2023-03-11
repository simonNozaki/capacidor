//
//  CapacidorApp.swift
//  App
//
//  Created by SImon Nozaki on 2023-03-11.
//

import SwiftUI

/*
 * アプリのエントリポイント。LaunchScreenののち環境選択ビューに移る
 */
@main
struct CapacidorApp : App {
    // AppDelegateをSwiftUIで使えるようにする: https://www.yururiwork.net/archives/1163
    @UIApplicationDelegateAdaptor (AppDelegate.self) var appDelegate
    
    var body: some Scene {
        WindowGroup {
            EnvironmentView().environmentObject(AppRuntimeState())
        }
    }
}
