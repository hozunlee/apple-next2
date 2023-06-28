import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if (req.method == "POST") {
        if (req.body.title == "") {
            return 응답.status(500).json("제목써야함");
        }
        const db = (await connectDB).db("forum");
        let post = await db.collection("post").insertOne(req.body);
        // return res.status(200).json("저장 완료", req.body);
        return res.redirect(302, "/list");
    }
}
