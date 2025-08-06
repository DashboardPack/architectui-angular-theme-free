import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSimpleComponent } from './test-simple.component';

@NgModule({
  declarations: [TestSimpleComponent],
  imports: [CommonModule],
  exports: [TestSimpleComponent]
})
export class TestModule {}
