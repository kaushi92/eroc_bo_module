<template>
    <footer class="footer">
        <div class="max-w-screen-xl mx-auto px-4 space-y-6">

            <!-- Top row: Contact, Useful Links, Info -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <!-- Contact Info -->
                <div class="space-y-2 text-center md:text-left">
                    <h6 class="font-semibold text-lg">Department of Registrar of Companies</h6>
                    <p class="text-sm leading-relaxed">
                        No. 400, D.R. Wijewardana Mawatha,<br>
                        Colombo 10,<br>
                        Sri Lanka<br><br>
                        <strong>Phone:</strong> +94 11 234 5678<br>
                        <strong>Email:</strong> info@roc.gov.lk
                    </p>
                </div>

                <!-- Useful Links -->
                <div class="space-y-2 text-center md:text-left">
                    <h4 class="font-semibold text-lg">Useful Links</h4>
                    <ul class="text-sm space-y-1">
                        <li><a href="https://www.presidentsoffice.gov.lk/" class="hover:underline">Presidential
                                Secretariat</a></li>
                        <li><a href="https://www.pmoffice.gov.lk/" class="hover:underline">Prime Minister's Office</a>
                        </li>
                        <li><a href="http://www.cabinetoffice.gov.lk/" class="hover:underline">Cabinet of Ministers</a>
                        </li>
                        <li><a href="http://www.documents.gov.lk/en/gazette.php" class="hover:underline">Government
                                Printing</a></li>
                    </ul>
                </div>

                <!-- Description -->
                <div class="text-sm leading-relaxed text-center md:text-justify">
                    <p class="text-justify">
                        The Department of Registrar of Companies (ROC) is responsible for the registration, regulation,
                        and supervision of companies and business entities in Sri Lanka.
                        This web-based Information System has been developed to streamline company registrations,
                        maintain accurate records, and provide efficient services to businesses and stakeholders.
                        The system is owned and maintained by the Department of Registrar of Companies, ensuring secure
                        and reliable access to corporate information.
                    </p>
                </div>

            </div>

            <!-- Bottom row: Copyright & credit - Centered Layout -->
            <div class="footer-bottom">
                <!-- Line 1: Department Name -->
                <div class="footer-line font-bold">
                    Department of Registrar of Companies, Sri Lanka
                </div>

                <!-- Line 2: Development Credit -->
                <div class="footer-line">
                    Designed & Developed by ROC IT Team
                </div>

                <!-- Line 3: Copyright -->
                <div class="footer-line">
                    © Copyright V1.0. All Rights Reserved
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
    background-color: #315372;
    color: #e0f2f1;
    padding: 2rem 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-bottom {
    border-top: 1px solid #0f766e;
    padding-top: 1rem;
    text-align: center;
    color: #d1d5db;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    letter-spacing: 0.4px
}

.footer-line {
    line-height: 1.4;
    text-align: center;
    width: 100%;
}

/* Hover effects for links */
.footer a {
    color: #e0f2f1;
    transition: color 0.2s ease;
}

.footer a:hover {
    color: #ffffff;
    text-decoration: underline;
}

/* Desktop View (1024px and above) */
@media (min-width: 1024px) {
    .footer-bottom {
        flex-direction: column;
        gap: 0.3rem;
    }
}

/* Medium/Tablet View (768px to 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
    .footer-bottom {
        flex-direction: column;
        gap: 0.5rem;
    }
}

/* Mobile View (767px and below) */
@media (max-width: 767px) {
    .footer {
        padding: 1.5rem 1rem;
    }

    .footer-bottom {
        padding-top: 0.75rem;
        gap: 0.75rem;
    }
}

/* Extra Small Mobile View (480px and below) */
@media (max-width: 480px) {
    .footer {
        padding: 1rem 0.75rem;
    }

    .footer-bottom {
        font-size: 0.8rem;
        gap: 0.5rem;
    }

    .footer-line {
        line-height: 1.3;
    }
}
</style>