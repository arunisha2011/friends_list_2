name_of_student_array=[]
function submit() {
    var display_student_array=[]
    for (i=1; i<=4; i++){
       var name_of_the_student= document.getElementById("name_of_the_student_"+i).value
       console.log(name_of_the_student)
       name_of_student_array.push(name_of_the_student)
    }
    var length_of_student_array=name_of_student_array.length
    console.log(length_of_student_array)
    for (k=0; k<length_of_student_array; k++){
        display_student_array.push("<h4>Name: "+name_of_student_array[k]+"</h4>")
        console.log(display_student_array)
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array
    var remove_comas=display_student_array.join(" ")
    console.log(remove_comas)
    document.getElementById("display_name_without_commas").innerHTML=remove_comas
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting() {
    name_of_student_array.sort()
    console.log(name_of_student_array)
    var display_student_sort=[]
    var length_of_student_array=name_of_student_array.length
    console.log(length_of_student_array)
    for (k=0; k<length_of_student_array; k++){
        display_student_sort.push("<h4>Name: "+name_of_student_array[k]+"</h4>")
        console.log(display_student_sort)
    }
    var remove_comas=display_student_sort.join(" ")
    console.log(remove_comas)
    document.getElementById("display_name_without_commas").innerHTML=remove_comas
}