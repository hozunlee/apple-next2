export default function write() {
    return (
        <div className="container">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input type="text" name="name" placeholder="글쓴이" />
                <input type="text" name="title" placeholder="제목" />
                <textarea name="body" id="" cols="30" rows="10"></textarea>
                <button type="submit">버튼</button>
            </form>
        </div>
    );
}

// 글발행 기능
// 1. 제목 / 바디 / 태그 필요
// 2. 폼안에 넣고 버튼 서브밋 누를 때 api post
// 3. 돌아온 데이터 확인
