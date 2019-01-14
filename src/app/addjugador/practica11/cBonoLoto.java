import java.util.Scanner;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Andrés Gomar Pérez
 */
public class cBonoLoto {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        try
        {
            iBonoLoto rmi=(iBonoLoto)java.rmi.Naming.lookup("//localhost:"+args[0]+"/BonoLoto");
            
            rmi.generar_sorteo();
            
            Scanner leer=new Scanner(System.in);
            
            int[]Cliente=new int [6];
            
            for(int i=0;i<6;i++)
            {
                System.out.println("Inserte un numero entreo el 1 y el 49 para poder participar en el sorteo ("+(i+1)+"):");
                Cliente[i]=leer.nextInt();
                
                if(Cliente[i]>49)
                {
                    i--;
                }
            }
            
            boolean ganador=rmi.comprobar_numero(Cliente);
            
            if(ganador==true)
            {
                System.out.println("Eres el GANADOR de la BonoLoto de hoy... El premio es 1.000.000 Euros.");
            }
            else
            {
                System.out.println("NO eres el GANADOR de la BonoLoto de hoy... El premio es 0 Euros.");
            }
            
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    
}
