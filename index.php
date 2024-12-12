<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Common Service Center</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans">
    <header class="bg-[#a39416] text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">Mahi IT Services</h1>
            <nav>
                <a href="#services" class="text-white mx-2 hover:underline">Services</a>
                <a href="#contact" class="text-white mx-2 hover:underline">Contact</a>
            </nav>
        </div>
    </header>

    <main class="container  mx-auto p-6">
        <!-- About Section -->
        <section id="about" class="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">About Us</h2>
            <p class="text-gray-700">Our Service is dedicated to providing a range of essential services to citizens, including e-Governance, digital literacy, and utility payments. We aim to bridge the digital divide and empower communities through technology.</p>
        </section>

        <!-- Services Section -->
        <section id="services" class="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">Our Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-gray-50 rounded shadow">
                    <h3 class="text-lg font-bold">Government Services</h3>
                    <ul class="list-disc list-inside">
                        <li>Application Filling for Certificates</li>
                        <li>Aadhaar Enrollment</li>
                        <li>Voter ID Registration</li>
                    </ul>
                </div>
                <div class="p-4 bg-gray-50 rounded shadow">
                    <h3 class="text-lg font-bold">Financial Services</h3>
                    <ul class="list-disc list-inside">
                        <li>Banking Assistance</li>
                        <li>Insurance Enrollments</li>
                        <li>Tax Filing</li>
                    </ul>
                </div>
                <div class="p-4 bg-gray-50 rounded shadow">
                    <h3 class="text-lg font-bold">Digital Services</h3>
                    <ul class="list-disc list-inside">
                        <li>Internet Access</li>
                        <li>Online Form Filling</li>
                        <li>Digital Literacy Training</li>
                    </ul>
                </div>
                <div class="p-4 bg-gray-50 rounded shadow">
                    <h3 class="text-lg font-bold">Utility Payments</h3>
                    <ul class="list-disc list-inside">
                        <li>Electricity Bill Payments</li>
                        <li>Mobile and DTH Recharge</li>
                        <li>Water Bill Payments</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
            <form class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
                </div>
                <button type="submit" class="bg-[#a39416] text-white px-4 py-2 rounded hover:bg-green-700">Send Message</button>
            </form>
        </section>
    </main>

    <footer class="bg-[#a39416] text-white py-4">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 Mahi IT Services. All Rights Reserved.</p>
            <p><a href="https://wa.me/919773383276/?text=Hi%20%2C%0A%0AI%20want%20a%20online%20Service%20for%20Form%20Filling%20">+91-9773383276 / <a href="mailto:vikram.gupta205@gmail.com">vikram.gupta205@gmail.com</a></p>
        </div>
    </footer>
</body>
</html>
