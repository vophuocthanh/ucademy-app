# Routing

## Next/Link

- Link: dùng Link của next-link để có thể chuyển qua lại giữa các page 1 cách mượt mà và không bị reload lại trang
- href: đường dẫn đến url

```js
<Link href={{ pathname: url, query: { slug: 'hello' } }}></Link>
```

- replace: sử dụng để khi truy cập 1 trang nào đó, thì bạn muốn back lại trang trước đó thì ko được (tùy vào mục đích sử dụng)
- scroll: mặc địch là `true` nghĩa là khi nhấn vào link thì sẽ scroll lên trên cùng, nếu không muốn scroll thì thiết lập thành `false`
- prefetch: prefetch không sử dụng được ở trang động (server), chỉ sử dụng được những trang tĩnh (client)
