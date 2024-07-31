import { BrowserRouter } from "react-router-dom"
import { CollectionsContextProvider } from "state/CollectionContext"
import { DrinkCreationContextProvider } from "state/DrinkCreationContext"
import { DynamicHeaderContextProvider } from "state/DynamicHeaderContext"
import { ServerStatusProvider } from "state/ServerSatusContext"

export const AppContextProviders = ({ children }: { children: any }) => {
    return (
        <BrowserRouter>
            <ServerStatusProvider>
                <CollectionsContextProvider>
                    <DrinkCreationContextProvider>
                        <DynamicHeaderContextProvider>
                            {children}
                        </DynamicHeaderContextProvider>
                    </DrinkCreationContextProvider>
                </CollectionsContextProvider>
            </ServerStatusProvider>
        </BrowserRouter>



    )
}