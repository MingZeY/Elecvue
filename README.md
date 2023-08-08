# Elecvue
使用Electron、Vite、Vue构建目前最简且带HMR的工作流模板项目，一键创建依赖，一键进入开发模式，一键打包

Build the simplest workflow template project with HMR using Electron and Vite+Vue, creating dependencies with one click, entering development mode with one click, and packaging with one click

## 安装
```bash
git clone https://github.com/MingZeY/Elecvue.git
cd Elecvue
npm run setup
```

## HMR开发
```bash
npm run dev
```

## 打包
```bash
npm run build
```
> 注意：打包输出目录在./electron/out目录

## 注意事项

- Vite + Vue 文件和依赖在vue目录下，electron 文件和依赖在 electron 目录下，如需安装依赖，请在对应目录进行安装
- 请勿混合依赖(例如Vue项目引用Elctron的依赖)，否则将导致打包体积庞大

## 更新日志
暂无