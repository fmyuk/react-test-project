import React from "react";

const Contact = () => {
  return (
    <>
      <h1>お問い合わせフォーム</h1>
      <p>全てのフィールドは必須項目です。</p>
      <form>
        <div>
          <label htmlFor="name">お名前</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="questions">お問い合わせ内容</label>
          <select id="questions">
            <option value="">お問い合わせ内容を選択してください</option>
            <option value="dev">開発案件のご相談</option>
            <option value="video">撮影のご相談</option>
            <option value="sns-marketing">SNSマーケティングのご相談</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />
            利用規約に同意する
          </label>
        </div>
        <button>送信</button>
      </form>
    </>
  );
};

export default Contact;
