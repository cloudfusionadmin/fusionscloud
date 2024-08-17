import { eq, sql } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { userRoles, users, UserStatus } from "../schema";

export const insertUserAndAssignRole = async (
  db: NodePgDatabase<Record<string, never>>,
) => {
  try {
   const [adminUser] = await db
    .select({id:users.id})
    .from(users).where(eq(users.email,'support@cloudfusion.com.au'))
    if (!adminUser) {
      let userData = {
        name: 'SuperAdmin',
        email: 'support@cloudfusion.com.au',
        email_verified: true,
        status: UserStatus.Active,
      }
      const [user] = await db.insert(users).values(userData).returning();

      const userRoleData = {
        roleId: 1,
        userId: user.id
      }
      console.log('🌱 Started Creating Admin \n');
      const [userRole] = await db.insert(userRoles).values(userRoleData).returning();
      console.log('🚀 Creating......\n');
      console.log('✅ Admin Created\n');
      console.log(`🌱 Your Super Admin Email '${user.email}' !\n`);
      console.log(`✅ Copy this email and login into Fusions Cloud dashboard !\n`);
    } else {
      const userRoleData = {
        roleId: 1,
        userId:adminUser.id
      }
      const [updateRole] = await db
      .select()
      .from(userRoles).where(eq(userRoles.userId,adminUser.id))
      console.log('🌱 Assigning admin role to user\n');
      if(!updateRole){
        const [userRole] = await db.insert(userRoles).values(userRoleData).returning();
      }else{
        const userRole = await db.update(userRoles).set(userRoleData).where(eq(userRoles.userId,adminUser.id));
      }
      console.log('🚀 Updating role......\n');
      console.log("✅ Role updated");
    }

  } catch (error) {
    console.error('Error inserting user and assigning role:', error);
  }
};