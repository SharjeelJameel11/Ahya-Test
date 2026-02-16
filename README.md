I have developed a Resume Builder frontend using React with Vite and styled it using Tailwind CSS.

To ensure font sizes are responsive across all screen sizes, I used the rem unit and set the base font size to 62.5% (equivalent to 10px).

While developing the screens, I focused on creating generic and reusable components. I built custom components such as FormInput, ImageUpload, and TextInput (using PrimeReact) so they could be reused consistently across the application.

I also designed an initial data structure named initialData, which helped me structure and render the screens according to the requirements.

I have implemented three custom resume templates with unique CSS, and all data is rendering correctly.

Additionally, I created a generic svg.jsx file to store all required SVGs in one place, importing them wherever needed to keep the code organized.

For layout and responsiveness, I primarily used CSS Grid, ensuring that the screens are as responsive as possible.