# Cloudflare Pages Next.js 应用

这是一个使用 Next.js 和 Cloudflare Pages 构建的全栈应用示例。

## 开发

```bash
npm run dev
```

## 本地预览

```bash
npm run preview
```

## 部署

```bash
npm run deploy
```

## 项目结构

- `app/` - Next.js 应用代码
- `app/api/` - API 路由
- `public/` - 静态资源

## 注意事项

- 所有服务端渲染的路由都必须使用 Edge Runtime
- 确保在每个服务端渲染的路由中添加 `export const runtime = "edge";` 