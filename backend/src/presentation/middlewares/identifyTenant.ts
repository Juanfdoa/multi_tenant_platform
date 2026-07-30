import { Request, Response, NextFunction } from "express";
import { prisma } from "../../infrastructure/database/prisma";


export const identifyTenant = async(
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    try {
        const tenantHeader = req.headers["x-tenant-id"];

        if(!tenantHeader || typeof tenantHeader !== "string"){

            return res.status(400).json({
                message:"X-Tenant-ID header is required"
            });

        }

        const tenantId = tenantHeader as string;
        
        const tenant = await prisma.tenant.findUnique({
            where:{
                id: tenantId
            }
        });

        if(!tenant || !tenant.isActive){
            return res.status(404).json({
                message:"Tenant not found"
            });
        }

        req.tenant = tenant;
        next();

    } catch(error){
        return res.status(500).json({
            message:"Tenant validation error"
        });
    }

};