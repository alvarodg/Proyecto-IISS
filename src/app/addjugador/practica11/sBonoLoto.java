
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Andrés Gomar Pérez
 */
import java.net.*;
import java.rmi.*;
import java.rmi.registry.*;
import java.rmi.server.*;
import java.util.Random;

public class sBonoLoto extends UnicastRemoteObject implements iBonoLoto {

    public Random rnd=new Random();
    public int [] sorteo=new int[6];
    
    sBonoLoto()throws RemoteException
    {
        for(int i=0;i<6;i++)
        {
            sorteo[i]=0;
        }
    }
   
    public int[] generar_sorteo()throws RemoteException
    {
        for(int i=0;i<6;i++)
        {
            sorteo[i]=rnd.nextInt(48)+1;
        }
        
        return sorteo;
    }
    
    public boolean comprobar_numero(int [] cliente)throws RemoteException
    {
        int cont=0;
        
        for(int i=0;i<6;i++)
        {
            for(int j=0;j<6;j++)
            {
                if(sorteo[i]==cliente[j])
                {
                    cont++;
                }
            }
        }
        
        if(cont==6)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception {
        // TODO code application logic here
        try
        {
            iBonoLoto rmi=new sBonoLoto();
            java.rmi.Naming.rebind("//localhost:"+args[0]+"/BonoLoto", rmi);
            System.out.println("Conexion Correcta....");
        }
        catch(Exception e)
        {
            System.out.println("Error de Conexion......");
        }
    }
    
}
