export default function signUp() {
    return (
        <div className="container">
            <h4>회원가입</h4>
            <form action="/api/sign/up" method="POST">
                <input type="text" name="name" placeholder="이름" />
                <input type="text" name="id" placeholder="아이디" />
                <input type="password" name="password" placeholder="비밀번호" />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}
