//
//  Color.swift
//  App
//
//  Created by SImon Nozaki on 2023-03-11.
//

import Foundation
import SwiftUI

/*
 * 色のstruct拡張。16進数で指定された色をColorコンストラクタに変換。
 */
extension Color {
  init(_ hex: UInt, alpha: Double = 1) {
    self.init(
      .sRGB,
      red: Double((hex >> 16) & 0xFF) / 255,
      green: Double((hex >> 8) & 0xFF) / 255,
      blue: Double(hex & 0xFF) / 255,
      opacity: alpha
    )
  }
}
