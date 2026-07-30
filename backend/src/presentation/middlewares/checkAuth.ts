import { Request, Response, NextFunction } from "express";
import { prisma } from "../../infrastructure/database/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "secret";


interface JwtPayload {
    userId: string;
    tenantId: string;
    role: "ADMIN" | "USER";
}


export const checkAuth = (roles?: ("ADMIN" | "USER")[]
) => {

    return async(
        req: Request,
        res: Response,
        next: NextFunction
    )=>{
        try {
            const authorization = req.headers.authorization;

            if(!authorization){
                return res.status(401).json({
                    message:"Token required"
                });
            }

            const token = authorization.replace("Bearer ", "");

            const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;

            console.log("PAYLOAD")
            console.log(payload)

            if(payload.tenantId !== req.tenant.id){

                return res.status(403).json({
                    message:"User does not belong to tenant"
                });

            }

            if(
                roles &&
                !roles.includes(payload.role)
            ){

                return res.status(403).json({
                    message:"Insufficient permissions"
                });

            }

            const user = await prisma.user.findUnique({
                where:{
                    id: payload.userId
                }
            });


            if(!user){
                return res.status(401).json({
                    message:"User not found"
                });
            }

            req.user = user;
            next();


        } catch(error){
            return res.status(401).json({
                message:"Invalid token"
            });
        }

    };

};