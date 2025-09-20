# Meet in the Middle (Frontend)

A location-based web application that helps users find a convenient **midpoint location** between multiple addresses, making it easier to plan meetups with friends, family, or colleagues.  
Built with **React**, **Redux Toolkit**, **Google Maps API**, and styled using **TailwindCSS**.

---

## 🚀 Features

- 🔑 **Authentication & Validation**  
  - JWT-based login & signup (integrated with backend)  
  - Form handling with **React Hook Form** + **Zod validation**

- 📍 **Location & Maps**  
  - Address search & autocomplete powered by **Google Places API**  
  - Displays midpoint location on an interactive **Google Map**  
  - Suggests nearby cafes, restaurants, and landmarks

- 🗺️ **Meeting Point Suggestions**  
  - Calculates midpoint using distance algorithms  
  - Allows saving and sharing meeting points with others  

- 💬 **Real-Time Interaction**  
  - **Socket.io** integration for live updates and notifications  
  - Confetti 🎉 for successful meetup planning  

- 🎨 **User Experience**  
  - Responsive UI with **TailwindCSS** and **Framer Motion** animations  
  - Toast notifications for feedback (`react-toastify`)  
  - Error handling with **React Error Boundary**  

---

## 🛠️ Tech Stack

**Frontend:**  
- ⚛️ React 19  
- 🗂 Redux Toolkit (state management)  
- 🎨 TailwindCSS + Framer Motion (UI/UX)  
- 📍 @react-google-maps/api (maps integration)  
- ⚡ Socket.io-client (real-time communication)  
- ✅ React Hook Form + Zod (form handling & validation)  
- 📅 React Datepicker & Date-fns (time/date utilities)  

**Tooling & Dev Experience:**  
- Vite (bundler)  
- ESLint + Prettier (code quality & formatting)  

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/YourUsername/meet-in-the-middle-client.git
cd meet-in-the-middle-client
