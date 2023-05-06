import Link from "next/link";
import React from "react";

const Note = () => {
  return (
    <div>
      <p>Full page reload</p>
      {/* Mỗi lần reload là tải lại tài nguyên toàn bộ */}

      <p>Prefetching</p>
      {/* 
      - Ở trong màn hình viewport có tag Link thì nó sẽ tải các file page.js tương ứng sẵn để click nó nhảy sang liền
      - chỉ xảy ra trong môi trường product (yarn build => yarn start)
      - đối với mạng yến thì nó k Prefetching 
      */}

      <p>Hydration</p>
      {/* 
      - Sau đó ghép tiếp các eventListener vào HTML DOM
      - Đôi khi có sự chênh lệch DOM trong code và render  
      */}

      <p>Hàm hydrate()</p>
      {/* 
      - Giống hàm render
      - Server result HTML - ReactDOMServer 
      - Sau đó tiến hành Hydration 
      */}

      <p>Pre-rendering (nextJs)</p>
      {/* 
      -render sẵn file HTML ở server 
      - Load thêm JS
      - sau đó thực hiện quá trình Hydration() 
      */}

      <p>not-Pre-rendering (reactJs)</p>
      {/* 
      - Lần đầu tiên trả về HTML chỉ có tag div id="root" nó trắng trang
      - Load thêm JS sau đó render ra id="app"
      */}

      <p>Static Site Generation - SSG</p>
      {/* 
      - Build dự án có sẵn những cái static  => file HTML
      - request => trả về HTML ==> tốc độ nhanh 
      */}

      <p>Server-side Rendering - SSR</p>
      {/* 
      - Mỗi request => trả về 1 file HTML => Tốc độ chậm vì phải xử lý nhiều 
      */}

      <p>Client-side Rendering - SSG</p>
      {/* 
      - SSG + fetch data on client
      - Trả về static sẵn của SSG
      - sau đó ghép data fetch động client vào 
      */}

      <p>Incremental Static Regeneration - ISR</p>
      {/* 
      - ?
      - ?
      - ?
      */}

      <Link href={"about"}>
        <a>Page about</a>
      </Link>
    </div>
  );
};

export default Note;
