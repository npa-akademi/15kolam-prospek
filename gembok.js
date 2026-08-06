(function() {
    // 🚨 DAFTAR NOMOR WA YANG DIIZINKAN (WHITELIST)
    // Jenderal CUKUP EDIT DI FILE INI SAJA kalau ada mitra baru yang bayar!
    const nomorSah = [
        "6285218453131", // Admin Jenderal
        "6281586197772", // Queen Tini
        "62818811829", // Suherman 
        "6282240001731" // Kurniawan S Ag 
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const namaMitra = urlParams.get('nama');
    const waMitra = urlParams.get('wa');

    if (namaMitra && waMitra) {
        // CEK GEMBOK SERVER
        if (nomorSah.includes(waMitra)) {
            
            const badge = document.createElement('div');
            badge.innerHTML = 'Di Presentasikan: ' + namaMitra;
            badge.style.cssText = 'position:fixed; top:0; left:50%; transform:translateX(-50%); background-color:#ef4444; color:white; padding:8px 24px; border-bottom-left-radius:12px; border-bottom-right-radius:12px; font-weight:900; z-index:99999; box-shadow:0 4px 10px rgba(0,0,0,0.3); font-size:14px; text-align:center; width:max-content; max-width:90%; font-family:sans-serif; border:2px solid white; border-top:none; text-transform:uppercase;';
            document.body.appendChild(badge);

            function replaceText(node, search, replace) {
                if (node.nodeType === 3) { 
                    node.nodeValue = node.nodeValue.replace(new RegExp(search, 'gi'), replace);
                } else if (node.nodeType === 1 && node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
                    node.childNodes.forEach(child => replaceText(child, search, replace));
                }
            }
            replaceText(document.body, "Sugiarto Kurniawan", namaMitra);

            const encodedNama = encodeURIComponent(namaMitra);
            const pesanDaftar = 'Halo ' + encodedNama + ', saya mau Daftar Online sekarang.';
            const linkWA_Baru = 'https://api.whatsapp.com/send?phone=' + waMitra + '&text=' + pesanDaftar;

            const semuaLink = document.querySelectorAll('a');
            semuaLink.forEach(link => {
                let hrefSaatIni = link.getAttribute('href') || '';
                if (hrefSaatIni.includes('wa.me') || hrefSaatIni.includes('api.whatsapp.com') || hrefSaatIni.includes('forms.gle') || hrefSaatIni.includes('whatsform.com')) {
                    link.setAttribute('href', linkWA_Baru);
                    link.setAttribute('target', '_blank'); 
                }
            });

        } else {
            // JIKA NOMOR WA SELUNDUPAN / BELUM BAYAR LISENSI
            alert("Akses Ditolak! Nomor WA (" + waMitra + ") belum terdaftar di server NPA Smart System. Hubungi Admin Sugiarto Kurniawan untuk aktivasi Web Replika Anda.");
        }
    }
})();
