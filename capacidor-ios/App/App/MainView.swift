//
//  MainView.swift
//  App
//
//  Created by SImon Nozaki on 2023-03-11.
//

import SwiftUI

/*
 * ウェブビューを返すView
 */
struct MainView: View {
    var hostUrl: String = ""
    
    var body: some View {
        VStack {
            WebViewControllerRepresentable(hostUrl: self.hostUrl)
        }
    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        MainView()
    }
}
