import React from 'react'

const Footer = () => {
  return (
    <footer id="reservation" className="bg-luxury-black text-white section-padding">
      <div className="container-custom">
        {/* 予約ボタン */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b"
          style={{
            borderColor: 'rgba(212, 175, 55, 0.3)',
          }}
        >
          <a
            href="tel:0467-84-7088"
            className="text-luxury-black px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all transform hover:scale-105 text-center whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
            }}
          >
            電話で予約
          </a>
          <a
            href="https://tabelog.com/kanagawa/A1404/A140406/14056514/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-luxury-black px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all transform hover:scale-105 text-center whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
            }}
          >
            食べログで予約
          </a>
          <a
            href="https://r.gnavi.co.jp/86x8t6wy0000/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-luxury-black px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-all transform hover:scale-105 text-center whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
            }}
          >
            ぐるなびで予約
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-6 sm:mb-8">
          {/* ロゴと説明 */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gradient-gold">蔵のカルビ 寒川店</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              美味しいを、子どもにも。<br />
              高級感と家族の温かみを兼ね備えた焼肉店
            </p>
            {/* Instagramリンク */}
            <a
              href="https://www.instagram.com/kurakaru1129/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all transform hover:scale-105 text-center"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
                color: '#1a1a1a',
              }}
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
              Instagramでフォロー
            </a>
          </div>

          {/* 店舗情報 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gradient-gold">店舗情報</h4>
            <div className="text-sm sm:text-base text-gray-400 space-y-2">
              <p>〒253-0106</p>
              <p>神奈川県高座郡寒川町宮山120-5</p>
              <p>TEL: 0467-84-7088</p>
              <p>FAX: 0467-84-7299</p>
            </div>
          </div>

          {/* 営業時間 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gradient-gold">営業時間</h4>
            <div className="text-sm sm:text-base text-gray-400 space-y-2">
              <p>月～日 ディナー 17:00～24:00</p>
              <p className="text-xs text-gray-500">（L.O. 23:30）</p>
              <p>定休日: 第1月曜日～木曜日</p>
            </div>
          </div>
        </div>


        {/* コピーライト */}
        <div
          className="text-center text-gray-400 text-sm pt-8 border-t"
          style={{
            borderColor: 'rgba(212, 175, 55, 0.3)',
          }}
        >
          <p>&copy; 2025 蔵のカルビ 寒川店 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
