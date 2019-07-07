export const ActionTypes = {
	setAppBarTitle : "SET_APP_BAR_TITLE"
};

export function setAppBarTitle(title){
    return {
        type: ActionTypes.setAppBarTitle,
        title 
    };
}