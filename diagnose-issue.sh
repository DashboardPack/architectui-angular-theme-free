#!/bin/bash

echo "Diagnosing Angular 20 standalone component issue..."
echo ""

echo "1. Checking Angular version:"
npx ng version

echo ""
echo "2. Checking if any global Angular configurations exist:"
ls -la ~/.angular* 2>/dev/null || echo "No global Angular config found"

echo ""
echo "3. Checking angular.json schematic defaults:"
cat angular.json | grep -A5 -B5 "standalone" || echo "No standalone configuration found in angular.json"

echo ""
echo "4. Creating a test component without standalone:"
cat > src/app/test-simple.component.ts << 'EOF'
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-simple',
  template: '<h1>Test Component</h1>'
})
export class TestSimpleComponent {}
EOF

echo ""
echo "5. Testing with a minimal module:"
cat > src/app/test.module.ts << 'EOF'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSimpleComponent } from './test-simple.component';

@NgModule({
  declarations: [TestSimpleComponent],
  imports: [CommonModule],
  exports: [TestSimpleComponent]
})
export class TestModule {}
EOF

echo ""
echo "Test files created. If the issue persists with these simple components,"
echo "it might be a bug in Angular 20 or a configuration issue."
echo ""
echo "Possible solutions:"
echo "1. Downgrade to Angular 19"
echo "2. Convert all components to standalone"
echo "3. Check for global Angular CLI configurations"
echo "4. Try creating a new Angular 20 project and compare configurations"