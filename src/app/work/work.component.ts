import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import {Location} from '@angular/common'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  sdata
  myform=new FormGroup({
    
   
    name:new FormControl(null),
    
    des:new FormControl(''),
    file:new FormControl(),
  })
  onfileupload(event)
  {
    
      const file = event.target.files[0];
      this.myform.get('file').setValue(file);
    
  }

  constructor(public http:HttpClient,public router:Router,public location:Location) { }
data
edata
url="http://localhost:8081/work/"
  ngOnInit(){
    
    this.http.get(this.url).subscribe((result)=>{

      this.data=result;
    })
   

  }
  
 

  CallPostApi()
  {
    
    const formData = new FormData();
  
    formData.append('name', this.myform.get('name').value);
    formData.append('des', this.myform.get('des').value);
    formData.append('file', this.myform.get('file').value);
    
   
    this.http.post(this.url,formData).subscribe(()=>{
     
    })
    alert('data enter successfully')
    this.http.get(this.url).subscribe((result)=>{

      this.data=result;
    })
    
  }
  delete(id)
  {
    var res=confirm('are you sure')
    if(res)
    {
      this.http.delete(this.url+id).subscribe(()=>{
        alert('you have delete data successfully');
        this.http.get(this.url).subscribe((result)=>{

          this.data=result;
        })

      })
    }
  }
  edit(id)
  {
    this.http.get(this.url+id).subscribe((result)=>{
      this.edata=result
    })
  }
  update(id)
  {
    const formData = new FormData();
   
    formData.append('name', this.myform.get('name').value);
    formData.append('des', this.myform.get('des').value);
    formData.append('file', this.myform.get('file').value);
    this.http.put(this.url+id,formData).subscribe(()=>{
      alert('Data updated successfully')
      
    })
 
  }

}
