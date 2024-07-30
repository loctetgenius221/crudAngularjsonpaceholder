import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifArticleComponent } from './ajout-modif-article.component';

describe('AjoutModifArticleComponent', () => {
  let component: AjoutModifArticleComponent;
  let fixture: ComponentFixture<AjoutModifArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutModifArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutModifArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
