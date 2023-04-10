package collections;

class Vector {

    public static void main(String[] args) {

        // Declaring the Vector
        java.util.Vector<Integer> vec = new java.util.Vector<Integer>();

        for (int i = 1; i <= 5; i++)
            vec.add(i);

        System.out.println(vec);

        // Remove element at index 3
        vec.remove(3);

        System.out.println(vec);

        for (int i = 0; i < vec.size(); i++)
            System.out.print(vec.get(i) + " ");
    }
}
