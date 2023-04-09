import java.io.File;
public class DirectorySearch {
    public void dSearch(String root,String fileName){
        File dir = new File(root);
        File [] list = dir.listFiles();
        for(File file:list) {
            if (file.isDirectory()) {
                dSearch(file.getAbsolutePath(), fileName);
            } else if (new RegexSearch().Regex(fileName,file.getName().toString())) {
                System.out.println(file.getAbsolutePath());

            }
        }
    }
}