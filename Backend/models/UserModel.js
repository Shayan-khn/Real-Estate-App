import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAQlBMVEX6+vqPj4/9/f3j4+OLi4uIiIj19fWTk5OXl5fo6OiFhYXw8PCjo6Orq6uCgoLX19fAwMDMzMyysrKdnZ24uLjd3d2aflU0AAADI0lEQVR4nO2b2XKjMBBFoUEbEotY/v9XB4VM4jgGSzbdolJ9Xmbecupq78ZFwTAMwzAMwzAMwzAMw7wCQCGltVbK8N8LASD7oXVaKaXdOPTX0YOiast6pQyEf9VoiivYAfSu2bS+qRvX588OjKvvzT7sytbmlvO/MvvOzueUA2jFjllAjPnGFaQ7UivLps2lVsATtTW5NldwhwP6mdycRQ78c7U1uT6DHJguQm1drhm2EnB7m8edG/2Ugz5ObZVbyOUiYwvBEZtB1USqrcvB0AYHbWxsqxv1PhJttqJI3WCJj22dcRWlHAxJbrQXkjHJjXTCyYSlsLqNhGqFnBLUytpJQjerU9xKdvvvduExlS7JraV0Ky68TmFOchtIzwWf5EZ6LweT5EZ7LYeETaR2xPe3IeaRtdER1x7AxuemSXeQIDfGBidIV+mHW3RwStI/Aoe41wz1bNuYYvYR8hfgB2CiRjRP9RKW56MqSJ8xt3JPK0m0p9VPuf44uYa+FHIjt6j9BSGmXAP6KWfdXnRNS7+x3dv106NZJ1zO8fySk151P0e27nSfPbQNADNPSjQi0AjtBpu/YfQFgDSLHwJ+MddpA34C3+RWYf4S8Cr4YtJUr4G8fAGqViv15PLxGKX0aPDswLZdypv5nrobsW6aYHT8o/QxYsI5ysAe3Ieio5ssiltSXWs3OYyaOSxx/dJndAjdLUhqKeyDUYxLK/Ee4E5XA/Patvab81fDeW6a3f6cG8Lue9o6nc4vY6a1Yg5AKHqdc2SFJg3CuZDUBt9HINQxoTrpPMW4wsEpaqXGuMDFFp+PQfoI056xwyHsIIGUPtEeGCth4221GmW2BaB/NzjEr3/eHVW8EQ1y4ztrtUHtukHMd7O7qc2IZkEO5leTw01tkxteO7tIvnwH+7Bof4xwNHVzKLxIs2tET/Y7ECgGLaK/oa21J/2FClg/RdW7ROc8dQsVAMygy8P0RK10pjbI+kcrP2vRPZh9ounqafYmY7ch/GLMLn52+vb+pLSbfWWLC7RBtiK4tCZUqY2x8nrtGW4ZMQzDMAzDMAzDMAzDvMs/CKkjPkmn4nUAAAAASUVORK5CYII="
    }
}, {timestamps: true})

const User = mongoose.model('User',UserSchema)

export default User;