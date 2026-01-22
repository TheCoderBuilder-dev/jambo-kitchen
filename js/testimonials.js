// Testimonials Data for Jambo Kitchen
const testimonials = [
    {
        name: "Sarah Wanjiku",
        role: "Food Blogger",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        rating: 5,
        text: "The nyama choma here is absolutely incredible. It reminds me of the meals my grandmother used to prepare. Authentic Kenyan flavors in a modern setting."
    },
    {
        name: "James Ochieng",
        role: "Regular Customer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        rating: 5,
        text: "I bring my family here every Sunday. The portions are generous, prices are fair, and the service is always excellent. Our go-to spot in Nairobi."
    },
    {
        name: "Amina Hassan",
        role: "Event Planner",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
        rating: 5,
        text: "We hosted our company dinner here and it was perfect. The private dining area, the food, and the staff went above and beyond. Highly recommended!"
    }
];

// Render star rating
function renderStars(count) {
    let stars = '';
    for (let i = 0; i < count; i++) {
        stars += '*';
    }
    return stars;
}

// Render Testimonials
function renderTestimonials() {
    const slider = document.getElementById('testimonials-slider');
    if (!slider) return;
    
    slider.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">${renderStars(testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h5>${testimonial.name}</h5>
                    <span>${testimonial.role}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', renderTestimonials);
