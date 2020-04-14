# python3
import os

def get_cur_path():
    import os
    import sys
    os.chdir(sys.path[0])
    return os.getcwd()

def file_name(file_dir):
    File_Name = []
    File_Title = []
    for files in os.listdir(file_dir):
        if os.path.splitext(files)[1] == '.md':
            File_Name.append(files)
            with open(file_dir + os.sep + files, 'r', encoding='utf-8') as f:
                line = f.readline()
                line = line.lstrip('#').lstrip(' ').replace('\n', '').replace('\r', '')
                File_Title.append(line)
    return File_Name, File_Title

def write_summary(file_dir, leetcode_file_name, leetcode_file_title, pta_file_name, pta_file_title):
    f = open(file_dir, 'w', encoding='utf-8')
    content = ['- [Home](/)\n\n']
    content.append('- [Template](/Template.md)\n\n')
    content.append('- LeetCode\n\n')
    for index in range(len(leetcode_file_name)):
        content.append('  - ['+ leetcode_file_title[index] + '](/leetcode/' + leetcode_file_name[index] +')\n')
    content.append('\n')
    content.append('- PTA\n\n')
    for index in range(len(pta_file_name)):
        content.append('  - ['+ pta_file_title[index] + '](/leetcode/' + pta_file_name[index] +')\n')
    content.append('\n')
    f.writelines(content)
    f.close()

if __name__ == '__main__':
    print("get_cur_path : ", get_cur_path())
    leetcode_file_name, leetcode_file_title = file_name(os.sep.join([get_cur_path(), 'docs', 'leetcode']))
    pta_file_name, pta_file_title = file_name(os.sep.join([get_cur_path(), 'docs', 'PTA']))
    print("leetcode_file_name : ",leetcode_file_name)
    print("leetcode_file_title : ",leetcode_file_title)
    print("pta_file_name : ",pta_file_name)
    print("pta_file_title : ",pta_file_title)
    write_summary(os.sep.join([get_cur_path(), 'docs', 'summary.md']), leetcode_file_name, leetcode_file_title, pta_file_name, pta_file_title)
