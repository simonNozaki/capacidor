# capacidor
<img src="docs/webview_screen.png" />

## Setup

### Web
```bash
yarn install
```

### iOS
capacitorのドキュメントに沿って、Xcodeやcocoapodsなど必要なツールキットをインストールする: https://capacitorjs.jp/docs/getting-started/environment-setup

Xcode周辺
- Xcodeそれ自体を、App storeなどから入手する
- Xcodeに含まれないCLIツールをインストール: `xcode-select --install`

apple siliconの場合:
```bash
sudo arch -x86_64 gem install ffi

# rubyを経由する場合。homebrewなどで直に入れてもよい
gem install cocoapods

arch -x86_64 pod install
```

Xcodeでワークスペースを開く:

```bash
npx cap open ios
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```
