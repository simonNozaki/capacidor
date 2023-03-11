//
//  CCBridgeViewController.swift
//  App
//
//  Created by SImon Nozaki on 2023-03-11.
//

import Capacitor
import UIKit
import Foundation

/*
 * Capacitorから直接コールされるViewControllerクラス。
 */
class CDBridgeViewController: CAPBridgeViewController {
    var hostUrl: String = ""
    
    // CAPBridgeViewController#viewDidLoadに追従する
    override func viewDidLoad() {
        super.viewDidLoad()
        self.becomeFirstResponder()
        
        guard let u = URL(string: self.hostUrl) else { return; }
        webView?.load(URLRequest(url: u))
    }
}
