"use server";

import { z } from "zod";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Zod Schema for strict input validation
const bookingSchema = z.object({
  vehicleId: z.string().uuid("Invalid vehicle ID"),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});

export async function createBookingRequest(formData) {
  // 1. Authentication Check
  const session = await getServerSession(authOptions);
  if (!session) {
    return { error: "Unauthorized. Please log in." };
  }

  // 2. Input Validation (Zod)
  const result = bookingSchema.safeParse({
    vehicleId: formData.get("vehicleId"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
  });

  if (!result.success) {
    return { error: "Invalid input data", details: result.error.errors };
  }

  // 3. Authorization (RBAC) 
  // In a real app, verify if the user has completed their profile (license, etc.)

  // 4. Rate Limiting (Placeholder for @upstash/ratelimit)
  // const { success } = await ratelimit.limit(session.user.id);
  // if (!success) return { error: "Too many requests." }

  try {
    /* 
      5. Database Transaction (Server-Side only)
      await prisma.$transaction(async (tx) => {
        // Calculate total price server-side (Never trust frontend)
        // Verify vehicle is still available
        // Create booking
        // Log to AuditLog
      })
    */
    
    return { success: true, message: "Booking request created successfully!" };
  } catch (error) {
    console.error("Booking Error:", error);
    return { error: "Failed to create booking request." };
  }
}
