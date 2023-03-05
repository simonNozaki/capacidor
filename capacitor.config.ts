import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.github.simonnozaki.capacidor',
  appName: 'capacidor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    // ip変わったら都度書き換える
    url: 'http://192.168.2.115:3000/',
    cleartext: true
  }
}

export default config
