<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Досье • Елисей Сухоносов</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
        }
        .card-main {
            background: rgba(255, 255, 255, 0.97);
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            margin: 40px auto;
            max-width: 960px;
            overflow: hidden;
            color: #222;
        }
        .header {
            background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
            padding: 60px 20px 40px;
            text-align: center;
            color: white;
            position: relative;
        }
        .profile-photo {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 8px solid rgba(255,255,255,0.8);
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
            object-fit: cover;
            margin-bottom: 20px;
        }
        .header h1 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .header p {
            font-size: 1.4rem;
            opacity: 0.95;
        }
        .section {
            padding: 35px 25px;
        }
        .section-title {
            font-size: 1.6rem;
            color: #444;
            border-bottom: 3px solid #667eea;
            padding-bottom: 12px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .info-block {
            background: #f8f9ff;
            padding: 20px;
            border-radius: 16px;
            border-left: 5px solid #667eea;
            transition: transform 0.2s;
        }
        .info-block:hover {
            transform: translateY(-5px);
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 14px 0;
            font-size: 1.15rem;
        }
        .contact-item i {
            font-size: 1.6rem;
            width: 45px;
            text-align: center;
        }
        .badge-phone {
            background: #667eea;
            color: white;
            padding: 6px 14px;
            border-radius: 50px;
            font-size: 0.9rem;
        }
        .family-card {
            background: linear-gradient(135deg, #ffeef8, #f8f9ff);
            border-radius: 18px;
            padding: 25px;
            text-align: center;
            transition: all 0.3s;
        }
        .family-card:hover {
            transform: scale(1.03);
        }
        a.btn-contact {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            margin: 5px;
        }
        a.btn-contact:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .note {
            font-style: italic;
            color: #555;
            font-size: 0.95rem;
            margin-top: 10px;
        }
        @media (max-width: 768px) {
            .header h1 { font-size: 2.2rem; }
            .profile-photo { width: 140px; height: 140px; }
            .section { padding: 30px 20px; }
            .info-grid { grid-template-columns: 1fr; }
            .btn-contact { padding: 12px 18px; font-size: 1rem; }
        }
    </style>
    <script>
        function calculateAge(birthDate) {
            const today = new Date('2026-01-02');
            const birth = new Date(birthDate);
            let age = today.getFullYear() - birth.getFullYear();
            const monthDiff = today.getMonth() - birth.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                age--;
            }
            return age;
        }

        window.onload = function() {
            const eliseyAge = calculateAge('2012-12-15');
            document.getElementById('elisey-age').textContent = eliseyAge + ' лет';

            const fatherAge = calculateAge('1959-09-29');
            document.getElementById('father-age').textContent = fatherAge + ' лет';

            const motherAge = calculateAge('1987-05-15');
            document.getElementById('mother-age').textContent = motherAge + ' лет';

            const sisterAge = calculateAge('2010-10-25');
            document.getElementById('sister-age').textContent = sisterAge + ' лет';
        };
    </script>
</head>
<body>
    <div class="container">
        <div class="card-main">
            <div class="header">
                <img src="https://i.ibb.co/prb92Lkn/image.jpg" alt="Елисей Сухоносов" class="profile-photo">
                <h1>Елисей Валерьевич Сухоносов</h1>
                <p>(~-{ Елисей }-~)</p>
            </div>

            <div class="section">
                <h2 class="section-title"><i class="fas fa-user-circle"></i> Основные данные</h2>
                <div class="info-grid">
                    <div class="info-block">
                        <strong><i class="fas fa-calendar-check"></i> Возраст:</strong> <span id="elisey-age">13 лет</span><br>
                        <strong><i class="fas fa-birthday-cake"></i> Дата рождения:</strong> 15 декабря 2012 года<br>
                        <strong><i class="fas fa-school"></i> Обучение:</strong> ГБОУ Школа №171<br>
                        Адрес школы: ул. Усачёва, 66, Москва, Россия, 119048<br>
                        <strong>Сайт школы:</strong> <a href="https://sch171c.mskobr.ru" target="_blank">sch171c.mskobr.ru</a><br>
                        <strong>Телефон директора:</strong> +7 499 245-99-72<br><br>
                        <strong><i class="fas fa-mobile-alt"></i> Номер телефона:</strong> +7 995 657 91 02
                    </div>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title"><i class="fas fa-home"></i> Адреса (актуальные на январь 2026)</h2>
                <div class="info-grid">
                    <div class="info-block">
                        <strong><i class="fas fa-home"></i> Адрес фактического проживания:</strong><br>
                        Россия, г. Москва, Фрунзенская набережная, д. 7, кв. 139<br>
                        <a href="https://www.google.com/maps/search/?api=1&query=%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F+7,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0" target="_blank" class="btn-contact bg-primary text-white mt-2">
                            <i class="fas fa-map-marker-alt"></i> Google Maps
                        </a>
                    </div>
                    <div class="info-block">
                        <strong><i class="fas fa-id-card"></i> Адрес регистрации (прописка):</strong><br>
                        Хабаровский край, г. Хабаровск, ул. Шмидта, д. 2, кв. 12<br>
                        <p class="note">Официальный адрес регистрации по месту жительства.</p>
                        <a href="https://www.google.com/maps/search/?api=1&query=%D1%83%D0%BB.+%D0%A8%D0%BC%D0%B8%D0%B4%D1%82%D0%B0+2,+%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA" target="_blank" class="btn-contact bg-primary text-white mt-2">
                            <i class="fas fa-map-marker-alt"></i> Google Maps
                        </a>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title"><i class="fas fa-users"></i> Семья</h2>
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="family-card">
                            <h4><i class="fas fa-male fa-2x text-primary mb-3"></i><br>Сухоносов Валерий Петрович</h4>
                            <p>Отец • <span id="father-age">66 лет</span><br>Дата рождения: 29 сентября 1959<br>Проживает в Москве<br>
                            <strong>Телефон:</strong> +7 916 988 66 79<br>
                            <strong>Паспорт:</strong> 0813 218613<br>
                            <strong>СНИЛС:</strong> 031-816-199-37<br>
                            <strong>Место работы:</strong> ФАДН<br>
                            <strong>Почта:</strong> alfa_dv@mail.ru<br>
                            <strong>Инвалидность:</strong> Да<br>
                            <strong>Полис ОМС:</strong> 2750040820000259<br>
                            <strong>ИНН:</strong> 2723131545170<br>
                            <strong>Номер карты:</strong> 2600007929328<br>
                            <strong>Автомобиль:</strong> Гос. номер Е304РО799<br>
                            <strong>Telegram:</strong> <a href="https://t.me/+79169886679">+79169886679</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="family-card">
                            <h4><i class="fas fa-female fa-2x text-danger mb-3"></i><br>Сухоносова Вероника Владимировна</h4>
                            <p>Мать • <span id="mother-age">38 лет</span><br>Дата рождения: 15 мая 1987<br>Проживает в Москве<br>
                            <strong>Телефон:</strong> +7 914 152 95 94<br>
                            <strong>ИНН:</strong> 272384724072<br>
                            <strong>Почта:</strong> nikasuhonosova@yandex.ru<br>
                            <strong>Почта:</strong> vironika_@mail.ru<br>
                            <strong>Паспорт:</strong> 0813220038
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="family-card">
                            <h4><i class="fas fa-child fa-2x text-pink mb-3"></i><br>Сухоносова Анастасия Валерьевна</h4>
                            <p>Сестра • <span id="sister-age">15 лет</span><br>Дата рождения: 25 октября 2010<br>Проживает в Москве<br>
                            <strong>Паспорт:</strong> 719860010
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section pb-5">
                <h2 class="section-title"><i class="fas fa-address-book"></i> Контакты и дополнительные данные</h2>
                
                <div class="contact-item">
                    <i class="fas fa-mobile-alt text-success"></i>
                    <div>
                        <strong>+7 995 657 91 02</strong> <span class="badge-phone">Россия</span><br>
                        <small>Основной номер Елисея</small>
                    </div>
                </div>

                <div class="mt-4 text-center">
                    <a href="https://wa.me/79956579102" target="_blank" class="btn-contact text-white" style="background:#25D366;">
                        <i class="fab fa-whatsapp fa-2x"></i> WhatsApp (Елисей)
                    </a>
                    <a href="https://t.me/ShiroX2" target="_blank" class="btn-contact text-white" style="background:#229ED9;">
                        <i class="fab fa-telegram fa-2x"></i> Telegram (Елисей)
                    </a>
                    <a href="https://t.me/+79169886679" target="_blank" class="btn-contact text-white" style="background:#229ED9;">
                        <i class="fab fa-telegram fa-2x"></i> Telegram (Отец)
                    </a>
                </div>

                <div class="info-block mt-4">
                    <strong><i class="fas fa-car"></i> Фотографии автомобиля отца MERCEDES GLC-Klasse (Е304РО799):</strong><br>
                    <a href="https://ibb.co/93rpyfDq">
                        <img src="https://i.ibb.co/5xR1sz05/1.jpg" alt="Автомобиль 1" style="max-width: 380px; border-radius: 16px; margin-top: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">
                    </a>
                    <a href="https://ibb.co/mCgZmbC7">
                        <img src="https://i.ibb.co/hRwQkLRv/2.jpg" alt="Автомобиль 1" style="max-width: 380px; border-radius: 16px; margin-top: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">
                    </a>
                </div>

                <div class="info-block mt-4">
                    <strong><i class="fas fa-image"></i> Фото Елисея:</strong><br>
                    <a href="https://ibb.co/prb92Lkn">
                        <img src="https://i.ibb.co/0VmdqGzQ/image.jpg" alt="Елисей Сухоносов" style="max-width: 380px; border-radius: 16px; margin-top: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">
                    </a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
