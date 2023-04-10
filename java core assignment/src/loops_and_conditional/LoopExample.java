package loops_and_conditional;

public class LoopExample {
    public static void main(String[] args) {
        String[] names = {"Ishtiaq","Ahmed","samdani","Tony","Stark"};

        // For loop
        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i]);
        }

        // Enhanced for loop (for-each loop)
        for (String name : names) {
            System.out.println(name);
        }

        // While loop
        int i = 0;
        while (i < names.length) {
            System.out.println(names[i]);
            i++;
        }

        // Do-while loop
        int j = 0;
        do {
            System.out.println(names[j]);
            j++;
        } while (j < names.length);
    }
}
