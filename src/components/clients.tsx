import { clients } from "@/constant";

export const Clients = () => {
    return (
        <section className="py-16 bg-primary">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {clients.map((client, i) => (
                        <div key={i} className="text-center text-white">
                            <client.icon className="h-10 w-10 mx-auto mb-4 opacity-80" />
                            <p className="text-4xl font-bold mb-1">{client.count}</p>
                            <p className="font-semibold mb-1">{client.title}</p>
                            <p className="text-sm opacity-70">{client.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}