import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormGroup, FormControl ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.sass']
})
export class InsightComponent implements OnInit {
  url="http://localhost:8081/insight/";
  constructor(public http:HttpClient) { }
data
  ngOnInit(): void {
this.http.get(this.url).subscribe((result)=>{

this.data=result

})
  }
  myform=new FormGroup({
    hed:new FormControl(''),
    meta:new FormControl(''),
    file:new FormControl(null),
    //file1:new FormControl(null),
    hed1:new FormControl(''),
    des1:new FormControl(''),
    hed2:new FormControl(''),
    des2:new FormControl(''),
    hed3:new FormControl(''),
    des3:new FormControl(''),
    hed4:new FormControl(''),
    des4:new FormControl(''),
    hed5:new FormControl(''),
    des5:new FormControl(''),
    hed6:new FormControl(''),
    des6:new FormControl(''),
    hed7:new FormControl(''),
    des7:new FormControl(''),
    hed8:new FormControl(''),
    des8:new FormControl(''),
    hed9:new FormControl(''),
    des9:new FormControl(''),
    hed10:new FormControl(''),
    des10:new FormControl(''),
  
  });

  onfileupload1(event)
  {
    
      const file = event.target.files[0];
      this.myform.get('file').setValue(file);
    
  }

  submitdata()
  {
    const formData = new FormData();
    formData.append('hed', this.myform.get('hed').value);
    formData.append('meta', this.myform.get('meta').value);
    formData.append('file', this.myform.get('file').value);
    //formData.append('file', this.myform.get('file1').value);
    formData.append('hed1', this.myform.get('hed1').value);
    formData.append('des1', this.myform.get('des2').value);
    formData.append('hed2', this.myform.get('hed2').value);
    formData.append('des2', this.myform.get('des2').value);
    formData.append('hed3', this.myform.get('hed3').value);
    formData.append('des3', this.myform.get('des3').value);
    formData.append('hed4', this.myform.get('hed4').value);
    formData.append('des4', this.myform.get('des4').value);
    formData.append('hed5', this.myform.get('hed5').value);
    formData.append('des5', this.myform.get('des5').value);
    formData.append('hed6', this.myform.get('hed6').value);
    formData.append('des6', this.myform.get('des6').value);
    formData.append('hed7', this.myform.get('hed7').value);
    formData.append('des7', this.myform.get('des7').value);
    formData.append('hed8', this.myform.get('hed8').value);
    formData.append('des8', this.myform.get('des8').value);
    formData.append('hed9', this.myform.get('hed9').value);
    formData.append('des9', this.myform.get('des9').value);
    formData.append('hed10', this.myform.get('hed10').value);
    formData.append('des10', this.myform.get('des10').value);
    
    this.http.post(this.url,formData).subscribe(()=>{
      alert('Data insert successfully')
      this.myform.reset();
      this.http.get(this.url).subscribe((result)=>{
        this.data=result
      })
    });
   
  }
  delete(id)
  {
    var res = confirm('Are you sure to delete this')
    if(res)
    {
     
    this.http.delete(this.url+id).subscribe(()=>{
      alert('Data Deleted Successfully');
      this.http.get(this.url).subscribe((result)=>{
        this.data=result
      })
    })
  }
  }
  edata
  edit(id)
  {
    this.http.get(this.url+id).subscribe((result)=>{

      this.edata=result
    })
  }
  update(id)
  {
    const formData = new FormData();
    formData.append('hed', this.myform.get('hed').value);
    formData.append('meta', this.myform.get('meta').value);
    formData.append('file', this.myform.get('file').value);
    //formData.append('file', this.myform.get('file1').value);
    formData.append('hed1', this.myform.get('hed1').value);
    formData.append('des1', this.myform.get('des2').value);
    formData.append('hed2', this.myform.get('hed2').value);
    formData.append('des2', this.myform.get('des2').value);
    formData.append('hed3', this.myform.get('hed3').value);
    formData.append('des3', this.myform.get('des3').value);
    formData.append('hed4', this.myform.get('hed4').value);
    formData.append('des4', this.myform.get('des4').value);
    formData.append('hed5', this.myform.get('hed5').value);
    formData.append('des5', this.myform.get('des5').value);
    formData.append('hed6', this.myform.get('hed6').value);
    formData.append('des6', this.myform.get('des6').value);
    formData.append('hed7', this.myform.get('hed7').value);
    formData.append('des7', this.myform.get('des7').value);
    formData.append('hed8', this.myform.get('hed8').value);
    formData.append('des8', this.myform.get('des8').value);
    formData.append('hed9', this.myform.get('hed9').value);
    formData.append('des9', this.myform.get('des9').value);
    formData.append('hed10', this.myform.get('hed10').value);
    formData.append('des10', this.myform.get('des10').value);
   this.http.put(this.url+id,formData).subscribe(()=>{
     alert('Data Successfully Updated');
     this.myform.reset();
     this.http.get(this.url).subscribe((result)=>{
       this.data=result
     })
   })

  }
}
