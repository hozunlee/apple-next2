import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if (req.method == "POST") {
        if (
            req.body.id == "" ||
            req.body.password == "" ||
            req.body.name == ""
        ) {
            return res.status(500).json("빈칸 없어야함");
        }
        const db = (await connectDB).db("forum");
        let checkUser = await db.collection("user").find().toArray();
        const valid = checkUser.find((user) => user.id === req.body.id);
        if (valid) {
            return res.status(500).json("응, 아이디 중복 돌아가");
        }
        let signUser = await db.collection("user").insertOne(req.body);

        return res.status(200).json("저장 완료");
    }
}
