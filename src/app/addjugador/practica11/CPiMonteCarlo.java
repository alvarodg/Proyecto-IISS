/**
 * Practica 11 
 * Se desea efectuar el calculo remoto de la aproximacion a pi mediante el ya 
 * conocido metodo de Monte-Carlo. Para desarrollar esta aproximacion distribuida,
 * un cliente RMI enviara una peticion remota al servidor que efectua el calculo,
 * indicandole con cuantos puntos contribuye al mismo. Diferentes cliente podran,
 * mediante sus respectivas llamadas al servidor, contribuir a mejorar la 
 * aproximacion remota, que sera unica y de precision creciente. El servidor 
 * debera ofrecer tambien un metodo de reset(), que cualquier cliente podra 
 * invocar para reiniar el calculo. Escriba una arquitetura RMI completa con 
 * ficheros. iPiMonteCarlo.java, CPiMonteCarlo.java y SPiMonteCarlo.java.
 * 
 * @author Andrés Gomar Pérez
 */

import java.rmi.Naming;
import java.util.*;

public class CPiMonteCarlo {
    
     /**Metodo principal
     * @param args Argumentos de la linea de comandos
     * @throws Exception
     */
    public static void main(String[] args) throws Exception{
        
        Scanner teclado = new Scanner(System.in);
        long precision;
        int opc;
        
        iPiMonteCarlo ObjetoRemoto = (iPiMonteCarlo)Naming.lookup("//localhost/Servidor");
        
        do{
            System.out.println("Menu: ");
            System.out.println("1 - Anadir precision");
            System.out.println("2 - Resetear precision");
            System.out.println("0 - Salir");

            System.out.print("Elija opcion: ");
            opc = teclado.nextInt();

            switch(opc)
            {
                case 1:
                {
                    System.out.print("Inserta precision: ");
                    precision = teclado.nextLong();        
                    System.out.println("Resultado "+ ObjetoRemoto.nPuntos(precision));  
                    break;
                }
                case 2:
                {
                    ObjetoRemoto.reset();
                    System.out.println("Precision resetada");
                    break;
                }
                case 0:
                    break;                
                default:
                {
                    System.out.println("Opcion invalida");break;
                }
            }
        }while(opc != 0);
    }
}
