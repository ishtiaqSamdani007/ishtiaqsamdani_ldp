package ishtiaq.assignment.main;

import ishtiaq.assignment.data.Data;
import ishtiaq.assignment.singleton.Singleton;

public class PakageMain {
    public static void main(String[] args) {
        Data obj1 = new Data();
        obj1.printVariables();
        obj1.printLocalVariables();

        Singleton obj2 = Singleton.initializeString("Hello World");
        obj2.printString();
    }
}
