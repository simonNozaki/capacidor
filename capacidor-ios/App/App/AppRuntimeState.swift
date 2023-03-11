//
//  AppRuntimeState.swift
//  App
//
//  Created by SImon Nozaki on 2023-03-11.
//

import Foundation

/*
 * アプリケーションの実行環境を表現するstate
 */
class AppRuntimeState : ObservableObject {
    @Published
    var isEnvironmentValid = false
}
