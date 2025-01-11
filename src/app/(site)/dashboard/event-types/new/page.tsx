import DashboardNav from "@/app/components/dashboardNav";
import EventTypeForm from "@/app/components/EventTypeForm";

export default function NewEventTypePage(){
    return(
        <div>
            <DashboardNav/>
            <div className="mt-4">
                <EventTypeForm/>
            </div>
        </div>
    )
}