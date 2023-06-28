export default function handler(req, res) {
    if (req.method == "POST") {
        return console.log("123 :>> ", 123);
    }

    return res.status(200).json("처리완료");
}
