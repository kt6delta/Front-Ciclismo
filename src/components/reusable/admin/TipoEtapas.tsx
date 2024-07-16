import { Input } from "@nextui-org/react";
import { etapas } from "@/utils/constantes/data";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
interface TitleProps {
    className?: string;
    mesage: string;
}

export const TipoEtapas = ({ mesage }: TitleProps) => {
    return (
        <>
            <div className="grid grid-cols-2">
                <Input
                    type="number"
                    variant="underlined"
                    label="Nombre"
                    name="nombre"
                    // value={formData.nombre}
                    // onChange={handleChange}
                    placeholder="Los Best"
                    classNames={{
                        base: "font-bold",
                    }}
                />
                <Autocomplete
                    label="Nacionalidad"
                    color="secondary"
                    variant="underlined"
                    size="md"
                    radius="md"
                    placeholder="Seleccione un Nacionalidad"
                    defaultItems={etapas}
                    classNames={{
                        base: "font-bold",
                    }}
                >
                    {etapas.map((option: any) => (
                        <AutocompleteItem
                            key={option.value}
                            value={option.label}
                            classNames={{
                                selectedIcon:
                                    "text-secondary",
                            }}
                        >
                            {option}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
            </div>
        </>
    )
}