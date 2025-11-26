import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const BOT_TOKEN = "TOKENINGNI_BU_YERGA_QO'Y";
const CHAT_ID = "CHAT_IDINGNI_BU_YERGA_QO'Y";

app.post("/send-message", async (req, res) => {
  const { name, phone, message } = req.body;

  const text = `
📩 Yangi Murojaat!
👤 Ism: ${name}
📞 Telefon: ${phone}
📝 Xabar: ${message}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Telegram error");
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend ishlayapti: http://localhost:5000");
});
