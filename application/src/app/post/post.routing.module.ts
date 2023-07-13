import { NgModule } from "@angular/core";
import { PostComponent } from "./post.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: PostComponent,
        data: {
            title: 'COMPONENT.POST.LABEL.JOKER',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostRoutingModule {}